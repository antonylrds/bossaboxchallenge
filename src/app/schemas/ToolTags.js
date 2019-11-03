import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
  tool_id: {
    type: String,
    required: true,
  },
  tags: [String],
});

export default mongoose.model('tool_tag', TagSchema);
