import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    order: {
        type: Number,
    },
    description: {
        type: String,
    },
    keywords: [{
        type: String,
    }],
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
    },
    content: {
        html: {
            type: String,
        },
        css: {
            type: String,
        },
        js: {
            type: String,
        }
    },
    edit: {
        type: Object,
    }
}, { timestamps: true }
);

pageSchema.pre('save', async function (next) {
    if (this.isNew) {
        const count = await mongoose.models.pages.countDocuments();
        this.order = count + 1;
    }
    next();
});

export default mongoose.model('pages', pageSchema);
