const store = {
  recipe: {
    id: String,
    title: String,
    img: String, // @2x @retina devices???
    metrics: {
      rating: Number
    },
    energyContent: {
      proteins: Number,
      fats: Number,
      carb: Number,
      kcal: Number
    },
    category: [ // Soon going deeper.
      {
        id: String,
        type: String,
        situation: String
      }
    ],
    mainTime: Date,
    stages: [{
      title: String, // «Подготовьте заправку»
      img: String,
      timer: Number,
      steps: [
        {
          type: Number, // */boiling/cutting/frimig
          title: String
        }
      ]
    }],
    // 400 gra of pig $
    /*  @amount 400
        @measure gra
        @name pig
    */
    portions: Number, // default: 2
    ingredients: [{
      id: String,
      type: Number, // Sauce or Dish ingredient
      amount: Number, // Amount
      measure: Number, //
      name: String,
      alternative: [], // ID's,
      required: Boolean
    }]
  }
}

export default store
