"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, `User name required.`]
    },
    email: {
        type: String,
        required: [true, `User email required.`],
        unique: true,
        lowercase: true,
        validate: [validator_1.default.isEmail, `User email is invalid.`]
    },
    location: {
        type: String
    },
    photo: {
        type: String,
        default: `default.jpg`
    },
    role: {
        type: String,
        enum: [`user`, `editor`, `admin`],
        default: `user`
    },
    password: {
        type: String,
        required: [true, `Password required.`]
    },
    passwordConfirm: {
        type: String,
        required: [true, `Confirm your password.`],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: `Passwords are not the same.`
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false //HIDDEN
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
//VIRTUAL POPULATE - userController.getUser
userSchema.virtual(`starreds`, {
    ref: `Starred`,
    foreignField: `user`,
    localField: `_id`
});
//MIDDLEWARES----------------------------------------------------------
//ENCRYPT PASSWORD
userSchema.pre(`save`, function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified(`password`))
            return next(); //IF PASSWORD NOT BEING MODIFIED, DO NOT ENCRYPT
        this.password = yield bcryptjs_1.default.hash(this.password, 12);
        this.passwordConfirm = undefined; //DELETE FOR SECURITY
        next();
    });
});
//RESET PASSWORD DATE
userSchema.pre(`save`, function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified(`password`) || this.isNew)
            return next(); //IF PASSWORD NOT BEING MODIFIED OR USER IS NEW, DO NOT RESET
        this.passwordChangedAt = Date.now(); //COMPARE TIMESTAMP ON JWT IN authController
        next();
    });
});
//HIDE USER WHEN `DELETED`
userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } }); //SET TO INACTIVE
    next();
});
//METHODS----------------------------------------------------------
//FOR authController.login - COMPARE ENTERED PASSWORD TO STORED PASSWORD
userSchema.methods.correctPassword = function (candidatePassword, userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(candidatePassword, userPassword);
    });
};
//FOR authController.protect - CHECK IF PASSWORD WAS CHANGED
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const passwordChangedAtNumber = `${this.passwordChangedAt.getTime() /
            1000}`;
        const changedTimestamp = parseInt(passwordChangedAtNumber, 10);
        return JWTTimestamp < changedTimestamp;
    }
    return false;
};
//FOR authController.forgotPassword - RESET TOKEN AND ITS EXPIRATION DATE
userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto_1.default.randomBytes(32).toString(`hex`);
    this.passwordResetToken = crypto_1.default
        .createHash(`sha256`)
        .update(resetToken)
        .digest(`hex`);
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
};
const User = mongoose_1.default.model(`User`, userSchema);
exports.default = User;
