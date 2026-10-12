export type CookingDateExperience = {
  overview: {
    duration: string
    serves: string
    difficulty: string
  }
  recipe: {
    title: string
    introduction: string
    time: string
    ingredients: { amount: string; name: string }[]
    steps: { title: string; instruction: string }[]
  }
  cookingTogether: {
    personA: string[]
    personB: string[]
    together: string[]
  }
  conversation: {
    theme: string
    questions: string[]
    note: string
  }
  optionalExtra: {
    title: string
    description: string
  }
}

export type CookingDate = {
  id: string
  category: string
  title: string
  description: string
  time: string
  mood: string
  emoji: string
  cardCopy: string
  experience?: CookingDateExperience
}

export const cookingDates: CookingDate[] = [
  {
    id: 'cook-yap',
    category: 'Cook & Yap',
    title: 'Getting to Know You Again',
    description: 'A little cooking, a little curiosity, a lot of catching up.',
    time: '45 mins',
    mood: 'Chat & catch up',
    emoji: '🍋',
    cardCopy: 'A little cooking, a little curiosity.',
    experience: {
      overview: {
        duration: 'About 45 minutes',
        serves: '2 people',
        difficulty: 'Easy',
      },
      recipe: {
        title: 'Creamy lemon chickpea & spinach pasta',
        introduction:
          'A bright, cosy bowl with silky lemon sauce, buttery chickpeas and plenty of greens. It comes together without fuss, leaving just enough time for the good conversation.',
        time: 'About 30 minutes',
        ingredients: [
          { amount: '180 g', name: 'dried linguine or spaghetti' },
          { amount: '1 tbsp', name: 'olive oil' },
          { amount: '1 small', name: 'shallot, finely chopped' },
          { amount: '2 cloves', name: 'garlic, finely chopped' },
          { amount: '1 × 400 g can', name: 'chickpeas, drained and rinsed' },
          { amount: '200 g', name: 'cherry tomatoes, halved' },
          { amount: '120 ml', name: 'unsweetened oat cooking cream' },
          { amount: '1 tbsp', name: 'nutritional yeast' },
          { amount: '1', name: 'lemon, zested and juiced' },
          { amount: '2 big handfuls', name: 'baby spinach (about 60 g)' },
          { amount: 'To finish', name: 'salt, black pepper and parsley' },
        ],
        steps: [
          {
            title: 'Get the pasta going',
            instruction:
              'Bring a large pot of well-salted water to a boil. Cook the pasta until just al dente, following the packet timing. Before draining, save about 120 ml of pasta water.',
          },
          {
            title: 'Make the kitchen smell amazing',
            instruction:
              'While the pasta cooks, warm the olive oil in a large pan over medium heat. Add the shallot and cook for 3–4 minutes until soft. Stir in the garlic for 30 seconds.',
          },
          {
            title: 'Build the cosy bits',
            instruction:
              'Add the chickpeas and tomatoes with a pinch of salt. Cook for 4–5 minutes, until the tomatoes soften. Gently squash a few tomatoes with your spoon to start a quick sauce.',
          },
          {
            title: 'Make it creamy and lemony',
            instruction:
              'Stir in the oat cream, nutritional yeast, lemon zest and 1 tablespoon of lemon juice. Season with black pepper and simmer gently for 2–3 minutes.',
          },
          {
            title: 'Bring everyone together',
            instruction:
              'Add the spinach and drained pasta to the pan. Toss until the spinach wilts and the sauce clings to the pasta, adding a splash of pasta water if needed. Taste, add more lemon or pepper if you like, and finish with parsley.',
          },
        ],
      },
      cookingTogether: {
        personA: [
          'Salt the pasta water, get it boiling, and cook the pasta to the packet timing. Save a mug of pasta water before draining.',
          'Rinse the spinach, zest and juice the lemon, and chop the parsley if you are using it.',
        ],
        personB: [
          'Finely chop the shallot and garlic, then halve the cherry tomatoes.',
          'Drain and rinse the chickpeas, then measure out the oat cream and nutritional yeast.',
        ],
        together: [
          'While the pasta cooks, take turns choosing a conversation starter. No need to answer every question.',
          'Toss the pasta and spinach through the sauce, taste for lemon and pepper, then plate up together.',
        ],
      },
      conversation: {
        theme: 'The little things we might not know about each other.',
        questions: [
          "What's something you've been enjoying lately that I might not know about?",
          "What's a small thing that can instantly make your day better?",
          "What's something you'd love for us to try together?",
          "What's a memory of us that still makes you smile?",
          "What's something about you that has changed over the last few years?",
        ],
        note:
          'These are conversation starters, not a checklist. Skip any question, follow an interesting tangent, or simply enjoy cooking together.',
      },
      optionalExtra: {
        title: 'The extremely informal pasta awards',
        description:
          'After dinner, invent a wildly specific award for tonight — “Most Dramatic Sauce Stir” or “Best Mid-Pasta Plot Twist,” perhaps. Give each other one and accept it with a completely unnecessary bow.',
      },
    },
  },
  {
    id: 'kitchen-chaos',
    category: 'Kitchen Chaos',
    title: 'Mystery-Basket Pasta',
    description:
      'Pick three surprise ingredients from the fridge and turn them into a very confident pasta. The plot may thicken.',
    time: '40 mins',
    mood: 'Play it by ear',
    emoji: '🍝',
    cardCopy: 'Three mystery ingredients. One brave sauce.',
  },
  {
    id: 'main-character',
    category: 'Main Character Energy',
    title: 'Golden-Hour Gnocchi',
    description:
      'Soft pillows, glossy sauce, dramatic plating. Cue your kitchen montage and take a bow at the table.',
    time: '45 mins',
    mood: 'A little extra',
    emoji: '🥘',
    cardCopy: 'Big montage energy, zero reservations.',
  },
  {
    id: 'a-little-flirty',
    category: 'A Little Flirty',
    title: 'Chocolate-Dipped Strawberries',
    description:
      'Melt, dip, and share the prettiest one. Optional: one very cinematic taste test before dessert is served.',
    time: '25 mins',
    mood: 'Sweet on you',
    emoji: '🍓',
    cardCopy: 'A little chocolate. A little eye contact.',
  },
]
