# AI Animal Disease Finder

An intelligent disease prediction system for animals using RAG (Retrieval-Augmented Generation) and machine learning embeddings.

## Features

- **Smart Disease Detection**: Uses sentence-transformers for accurate symptom-based disease prediction
- **Multiple Animals Support**: Supports Dogs, Cats, Cows, Horses, Chickens, Pigs, Sheep, Goats, Ducks, Turkeys, Rabbits, and Fish
- **80+ Diseases**: Comprehensive database of common animal diseases
- **Confidence Scores**: Shows prediction confidence (High/Medium/Low)
- **Beautiful UI**: Modern Bootstrap 5 interface

## Tech Stack

- **Backend**: Flask, Python
- **ML Model**: sentence-transformers (all-MiniLM-L6-v2)
- **Frontend**: HTML, CSS, Bootstrap 5, JavaScript
- **Data**: CSV dataset with disease information

## Installation

1. Clone the repository and navigate to the project folder:
```bash
cd animal-disease-detection
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Project

1. Start the server:
```bash
python server.py
```

2. Open your browser and go to:
```
http://localhost:5003
```

## Usage

1. Select an animal from the dropdown
2. Describe the symptoms (e.g., "fever, vomiting, loss of appetite")
3. Click "Analyze Symptoms"
4. View the predicted disease, explanation, and precautions

## API Endpoint

**POST /predict**
```json
{
  "animal": "Dog",
  "symptoms": "fever vomiting lethargy"
}
```

Response:
```json
{
  "disease": "Parvovirus",
  "confidence": "High",
  "explanation": "Canine parvovirus is a highly contagious viral disease...",
  "precautions": "Isolate immediately, provide fluid therapy...",
  "top_matches": [...]
}
```

## Project Structure

```
animal-disease-detection/
├── server.py              # Flask server with ML embeddings
├── requirements.txt      # Python dependencies
├── .env                  # Environment variables
├── README.md             # This file
├── backend/
│   └── config.py         # Configuration
├── frontend/
│   └── index.html        # Bootstrap UI
└── data/
    └── dataset.csv       # Disease database
```

## License

MIT License

## Disclaimer

This tool is for educational purposes only. Always consult a veterinarian for proper diagnosis and treatment.
