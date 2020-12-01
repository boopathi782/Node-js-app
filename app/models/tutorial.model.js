 
    module.exports = mongoose => {
        var schema = mongoose.Schema(
          {    
            slot_mode: String,
            date_value: Date,
            from_time: String,
            to_time: String,
                        
          },
          { timestamps: true }
        );
      
        schema.method("toJSON", function() {
          const { __v, _id, ...object } = this.toObject();
          object.id = _id;
          return object;
        });
      
    
      const Tutorial = mongoose.model("appoiment", schema);

        return Tutorial;
      };
 