"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const starredSchema = new mongoose_1.default.Schema({
    drink: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: `Drink`,
        required: [true, `Starred drink must be a valid drink.`]
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: `User`,
        required: [true, `Starred drink must belong to a user.`]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
//COMPOUND INDEX TO FIND IF DRINK AND USER IS UNIQUE
starredSchema.index({ drink: 1, user: 1 }, { unique: true });
//SHOW USER AND DRINK
starredSchema.pre(/^find/, function (next) {
    this.populate(`drink`).populate(`user`);
    next();
});
const Starred = mongoose_1.default.model(`Starred`, starredSchema);
exports.default = Starred;
