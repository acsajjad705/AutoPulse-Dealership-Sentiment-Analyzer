from flask import Flask, request, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)
analyzer = SentimentIntensityAnalyzer()

@app.route('/api/sentiment/', methods=['POST'])
def sentiment():
    data = request.get_json() or {}
    text = data.get('text', '')
    if not text:
        return jsonify({'error':'no text provided'}), 400
    score = analyzer.polarity_scores(text)['compound']
    if score >= 0.05:
        s = 'positive'
    elif score <= -0.05:
        s = 'negative'
    else:
        s = 'neutral'
    return jsonify({'sentiment': s, 'score': score})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
