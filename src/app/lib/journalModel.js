const { default: mongoose } = require("mongoose");

const journalModel = new mongoose.Schema({
  stock_name:String,
  time_frame:String,
  trades_tatus:String,
  buying_date:String,
  selling_date:String,
  buying_price:String,
  selling_price:String,
  notes:String,
  stop_loss:String,
  quantity:String,
  strategy:String,
  reason:String,
  create_date:String,
  user_id:mongoose.Schema.Types.ObjectId
});

export const journalSchema = mongoose.models.tradebooks || mongoose.model("tradebooks",journalModel);