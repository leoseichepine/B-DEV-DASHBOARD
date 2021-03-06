define({ "api": [
  {
    "type": "get",
    "url": "/cat/info/:breed",
    "title": "Get information about the cat's breed",
    "name": "GetBreed",
    "group": "Cat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "breed",
            "description": "<p>The cat's breed or its id. Example:</p> <ul> <li>'abys' or 'Abyssinian'</li> <li>'amis' or 'Australian Mist'</li> <li>'norw' or 'Norwegian Forest Cat'</li> <li>'tonk' or 'Tonkinese'</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "weight",
            "description": "<p>The weight of the cat (imperial and metric).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The breed ID of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the cat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>The origin of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>The code of the cat's country of origin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "life_span",
            "description": "<p>The average lifespan of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adaptability",
            "description": "<p>The cat's level of adaptability (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "affection_level",
            "description": "<p>The cat's level of affection (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_friendly",
            "description": "<p>The cat's level of child friendly (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dog_friendly",
            "description": "<p>The cat's level of dog friendly (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "energy_level",
            "description": "<p>The cat's level of energy (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grooming",
            "description": "<p>The cat's level of grooming (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "health_issues",
            "description": "<p>The cat's level of health issues (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intelligence",
            "description": "<p>The cat's level of intelligence (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shedding_level",
            "description": "<p>The cat's level of shedding (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social_needs",
            "description": "<p>The cat's level of social needs (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stranger_friendly",
            "description": "<p>The cat's level of stranger friendly (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vocalisation",
            "description": "<p>The cat's level of vocalisation (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wikipedia_url",
            "description": "<p>The Wikipedia link about the cat breed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cat.mjs",
    "groupTitle": "Cat"
  },
  {
    "type": "get",
    "url": "/cat/breeds",
    "title": "List all available cat breeds",
    "name": "GetBreeds",
    "group": "Cat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "weight",
            "description": "<p>The weight of the cat (imperial and metric).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The breed ID of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the cat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "origin",
            "description": "<p>The origin of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>The code of the cat's country of origin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "life_span",
            "description": "<p>The average lifespan of the cat.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adaptability",
            "description": "<p>The cat's level of adaptability (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "affection_level",
            "description": "<p>The cat's level of affection (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "child_friendly",
            "description": "<p>The cat's level of child friendly (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dog_friendly",
            "description": "<p>The cat's level of dog friendly (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "energy_level",
            "description": "<p>The cat's level of energy (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grooming",
            "description": "<p>The cat's level of grooming (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "health_issues",
            "description": "<p>The cat's level of health issues (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intelligence",
            "description": "<p>The cat's level of intelligence (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shedding_level",
            "description": "<p>The cat's level of shedding (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social_needs",
            "description": "<p>The cat's level of social needs (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stranger_friendly",
            "description": "<p>The cat's level of stranger friendly (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vocalisation",
            "description": "<p>The cat's level of vocalisation (1 to 5).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wikipedia_url",
            "description": "<p>The Wikipedia link about the cat breed.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cat.mjs",
    "groupTitle": "Cat"
  },
  {
    "type": "get",
    "url": "/cat/categories",
    "title": "List all available categories",
    "name": "GetCategories",
    "group": "Cat",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the category.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cat.mjs",
    "groupTitle": "Cat"
  },
  {
    "type": "get",
    "url": "/cat/image/breed/:breed_id",
    "title": "Get a random image about the cat's breed",
    "name": "GetImageBreed",
    "group": "Cat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "breed_id",
            "description": "<p>The cat's breed id. Example:</p> <ul> <li>'abys' for Abyssinian</li> <li>'amis' for Australian Mist</li> <li>'norw' for Norwegian Forest Cat</li> <li>'tonk' for Tonkinese</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "breeds",
            "description": "<p>The list of information on the breeds that match the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>The width of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>The height of the image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cat.mjs",
    "groupTitle": "Cat"
  },
  {
    "type": "get",
    "url": "/cat/image/category/:category_id",
    "title": "Get a random image according to a category",
    "name": "GetImageCategory",
    "group": "Cat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>The category id. Example:</p> <ul> <li>1: hats</li> <li>2: space</li> <li>4: sunglasses</li> <li>5: boxes</li> <li>7: ties</li> <li>14: sinks</li> <li>15: clothes</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "breeds",
            "description": "<p>The list of information on the breeds that match the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "categories",
            "description": "<p>The list of information on the categories that match the query.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The url of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>The width of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>The height of the image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cat.mjs",
    "groupTitle": "Cat"
  }
] });
