
class Words {
    constructor(ctx, canvas) {
        this.words = [
            'able', 'abundance', 'accelerate', 'accept', 'ace', 'achieve', 'active', 'adorable', 'advance', 'adventure', 'alight', 'alive', 'always', 'amaze', 'amuse', 'aspire', 'ascend', 'attain', 'attraction', 'awake', 'aware', 'awesome', 'beaming', 'beauty', 'believe', 'bliss', 'bounty', 'brave', 'bravo', 'bubbly', 'blessing', 'blessed', 'blissful', 'bloom', 'balance', 'blossom', 'balanced', 'brilliant', 'beloved', 'best', 'better', 'bold', 'boldness', 'bright', 'breezy','brilliance', 'bravery', 'belonging', 'breathtaking', 'blazing', 'beauty', 'benevolent', 'befriend', 'best', 'buddy', 'calm', 'capable', 'care', 'charm', 'cheers', 'chirp', 'classy', 'clean', 'clear', 'comfort', 'comic', 'confirm', 'confidence', 'celebrate', 'content', 'cool', 'cosy', 'courage', 'creative', 'cuddly', 'cushy', 'cute', 'constant', 'champion', 'caring', 'certainty', 'clarity', 'connection', 'carefree', 'clever', 'credible', 'curious', 'delicate', 'delicious', 'delight', 'dreamy', 'dynamic', 'dazzling', 'delight', 'divine', 'do', 'daring', 'deserving', 'decent', 'desire', 'devoted', 'drive', 'diversity', 'dependable', 'dedication', 'discovery', 'earnest', 'easy', 'ecstatic', 'effective', 'efficient', 'effortless', 'elegant', 'enchanting', 'energetic', 'energized', 'engaging', 'essential', 'esteemed', 'ethical', 'excellent', 'exciting', 'exquisite', 'empathy', 'ease', 'easily', 'education', 'empower', 'encourage', 'enable', 'elated', 'engaged', 'energy', 'educated', 'elegance', 'effective', 'excited', 'enjoy', 'endurance', 'experience', 'expertise', 'enjoyment', 'eager', 'elevate', 'evolve', 'expression', 'empowering', 'enchanted', 'ecstatic', 'equal', 'exemplary', 'earnest', 'enduring', 'expansive', 'exuberant ', 'entertaining', 'endearing','fabulous', 'fair', 'familiar', 'fantastic', 'favorable', 'fitting', 'free', 'fresh', 'flourish', 'fortunate', 'friendly', 'fun', 'funn', 'flowing', 'faith', 'faithful', 'favorite', 'family ', 'focus', 'fulfilled', 'forgiving ', 'fancy', 'fearless', 'festive', 'fit', 'fortitude', 'freedom', 'frank', 'generous', 'genius', 'genuine', 'giving', 'glow', 'glowing', 'good', 'gorgeous', 'graceful', 'great', 'grin', 'growing', 'genius', 'gift', 'genial', 'generate', 'giddy', 'glad', 'growth', 'guidance', 'guide', 'give', 'giving', 'good', 'goodness', 'grand', 'great', 'goddess', 'gorgeous', 'grounded', 'glory', 'grow', 'gratitude', 'gratitude', 'goodwill', 'gentle', 'happy', 'healing', 'healthy', 'heart', 'heartfelt', 'hearty', 'heavenly', 'honest', 'honor', 'hug', 'hope', 'humble', 'happily', 'human', 'honesty', 'harmony', 'health', 'hopeful', 'hope', 'healthy', 'humor', 'hero', 'holy', 'harness', 'holiness', 'honor', 'helpful', 'holistic', 'humorous', 'handsome', 'hilarious', 'idea', 'ideal', 'imagine', 'impressive', 'independent', 'innovate', 'instant', 'intuitive', 'inventive', 'inspire', 'inspiration', 'improve', 'influence', 'insight', 'integrity', 'intention', 'intrepid', 'innocence', 'intense', 'intimacy', 'investment', 'invincible', 'incredible', 'ingenious', 'insightful', 'inspiring', 'impartial', 'jovial', 'joy', 'jubilant', 'joyful', 'joyous', 'jolly', 'justice', 'just', 'kind', 'kindness', 'knowing', 'kiss', 'keen', 'kiss', 'keep', 'king', 'laugh', 'light', 'legendary', 'learned', 'lively', 'lovely', 'lucid', 'lucky', 'luminous', 'like', 'love', 'leader', 'loving', 'liberty', 'luxury', 'life', 'lesson', 'logical', 'lovable', 'loyal', 'merit', 'moving', 'more', 'mercy', 'modest', 'mindful', 'magic', 'memorable', 'memories', 'miracle', 'majestic', 'natural', 'nice', 'now', 'nurture', 'noble', 'namaste', 'nourish', 'neat', 'nirvana', 'nourish', 'new', 'one', 'open', 'optimist', 'open', 'onwards', 'overcome', 'oneness', 'outgoing', 'original', 'opportunity', 'positive', 'paradise', 'pleasant', 'poised', 'polished', 'powerful', 'prepared', 'productive', 'progress', 'prominent', 'protected', 'proud', 'passion', 'persistent', 'peace', 'prosper', 'precision', 'proactive', 'punctual', 'patience', 'power', 'playful', 'play', 'pleased', 'pleasing', 'purpose', 'prepared', 'present', 'polite', 'possible', 'priceless', 'progress', 'privacy', 'privilege', 'patient', 'persuasive', 'protective', 'passionate', 'queen', 'quality', 'ready', 'refined', 'refreshing', 'rejoice', 'relax', 'respect', 'reliable', 'remarkable', 'restored', 'reward', 'rewarding', 'right', 'robust', 'recommend', 'relieve', 'relieved', 'refreshed', 'resource', 'reliable', 'responsible', 'renewed', 'resilient', 'reverence', 'romance', 'rainbow', 'risk', 'revived', 'revelation', 'rest', 'rested', 'righteous', 'respectful', 'resolute', 'receptive', 'safe', 'secure', 'simple', 'simplify', 'skilled', 'skillful', 'smile', 'soulful', 'sparkle', 'special', 'spirited', 'spiritual', 'stupendous', 'stunning', 'success', 'successful', 'sunny', 'superb', 'supportive', 'sacred', 'selfless', 'serene', 'serenity', 'security', 'soulful', 'service', 'still', 'surprise', 'soul', 'shelter', 'space', 'save', 'sincere', 'strive', 'splendid', 'supreme', 'smart', 'shine', 'sublime', 'sunny', 'strong', 'strength', 'sentimental', 'shift', 'synergy', 'stretch', 'stellar', 'superb', 'supportive', 'steadfast', 'sensitive', 'steady', 'spunky', 'sensible', 'selective', 'trust', 'true', 'thrill', 'thrive', 'tranquil', 'transform', 'truth', 'tact', 'teach', 'team', 'thankful', 'tender', 'timely', 'tradition', 'tough', 'talented', 'thoughtful', 'uplift', 'up', 'ultimate', 'useful', 'unity', 'unique', 'valued', 'vibrant', 'victory', 'variety', 'virtue', 'versatile', 'welcome', 'well', 'whole', 'wholesome', 'willing', 'wonder', 'wow', 'worthy', 'warm', 'win', 'wise', 'wellness', 'yes', 'yummy', 'yay', 'you', 'young', 'youth', 'youthful', 'zeal', 'zest', 'zing'



        ]
        this.ctx = ctx;
        this.canvas = canvas;

    }

    randomizeWord() {
        const randomIdx = Math.floor(Math.random() * this.words.length)
        return this.words[randomIdx];
    }




    // bounds() {
    //     return {
    //         left: this.x,
    //         right: this.x + WORD_CONSTANTS.WIDTH,
    //         top: this.y,
    //         bottom: this.y + WORD_CONSTANTS.HEIGHT
    //     }
    // }


    // outOfBounds() {
    //     const aboveTheTop = this.y < 0;
    //     const belowTheBottom = this.y + WORD_CONSTANTS.HEIGHT > this.y
    //     return aboveTheTop || belowTheBottom
    // }




    
};


export default Words;

