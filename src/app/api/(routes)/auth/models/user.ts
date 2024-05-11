import { Model, Schema, model, models } from 'mongoose';
import { IUserCreatePayload } from '../types/User';

const UserSchema = new Schema<IUserCreatePayload>(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        image: { type: String },
        password: { type: String, required: true, select: false }
    },
    {
        timestamps: true
    }
);

const UserModel =
    (models?.User as Model<Document & IUserCreatePayload>) ||
    model('User', UserSchema);

export default UserModel;
