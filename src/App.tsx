import { useState } from 'react'
import './App.css'

type CookingDate = {
  id: string
  category: string
  title: string
  description: string
  time: string
  mood: string
  emoji: string
  cardCopy: string
}

const cookingDates: CookingDate[] = [
  {
    id: 'cook-yap',
    category: 'Cook & Yap',
    title: 'Build-Your-Own Taco Night',
    description:
      'Set out all the fillings, pour something bubbly, and let the kitchen gossip flow. Extra lime is always a good idea.',
    time: '30 mins',
    mood: 'Chat & graze',
    emoji: '🌮',
    cardCopy: 'Chop, chat, snack. Repeat.',
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

type SelectionSource = 'surprise' | 'category'

function BrandHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Cooking Dates home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none">
            <path
              d="M18 3.5 21.6 14.4 32.5 18l-10.9 3.6L18 32.5l-3.6-10.9L3.5 18l10.9-3.6L18 3.5Z"
              fill="currentColor"
            />
            <circle cx="28.5" cy="7.5" r="2" fill="currentColor" />
          </svg>
        </span>
        <span className="brand-name">cooking <strong>dates</strong></span>
      </a>
      <a className="header-link" href="#date-ideas">
        Pick a mood <span aria-hidden="true">↓</span>
      </a>
    </header>
  )
}

function DateResult({
  selectedDate,
  source,
}: {
  selectedDate: CookingDate | null
  source: SelectionSource | null
}) {
  const isSurprise = source === 'surprise'

  return (
    <section
      className={`date-result${selectedDate ? ' date-result--selected' : ''}`}
      id="date-result"
      aria-label="Your cooking date idea"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="result-topline">
        <span className="result-label">
          {selectedDate
            ? isSurprise
              ? "TONIGHT'S PLOT TWIST"
              : "TONIGHT'S PICK"
            : 'YOUR NEXT DATE NIGHT'}
        </span>
        <span className="result-sparkle" aria-hidden="true">
          ✳
        </span>
      </div>

      <div className="result-main">
        <div className="result-emoji" aria-hidden="true">
          {selectedDate?.emoji ?? '🍳'}
        </div>
        <div className="result-copy">
          {selectedDate ? (
            <>
              <span className="result-category">{selectedDate.category}</span>
              <h2>{selectedDate.title}</h2>
              <p>{selectedDate.description}</p>
            </>
          ) : (
            <>
              <span className="result-category">A good night starts here</span>
              <h2>Let’s make a night of it.</h2>
              <p>
                Tap “Surprise us!” for a date idea, or pick the mood that feels
                like you two.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="result-footer">
        <span>{selectedDate?.time ?? 'No reservations required'}</span>
        <span className="result-footer-dot" aria-hidden="true">
          ·
        </span>
        <span>{selectedDate?.mood ?? 'Just bring your favourite person'}</span>
      </div>
    </section>
  )
}

function CategoryCard({
  date,
  index,
  isSelected,
  onSelect,
}: {
  date: CookingDate
  index: number
  isSelected: boolean
  onSelect: (date: CookingDate) => void
}) {
  return (
    <button
      className={`category-card category-card--${date.id}${isSelected ? ' is-selected' : ''}`}
      type="button"
      aria-pressed={isSelected}
      aria-controls="date-result"
      onClick={() => onSelect(date)}
    >
      <span className="category-card-top">
        <span className="category-number">0{index + 1}</span>
        <span className="category-emoji" aria-hidden="true">
          {date.emoji}
        </span>
      </span>
      <span className="category-name">{date.category}</span>
      <span className="category-description">
        {isSelected ? (
          <>
            Tonight: <strong>{date.title}</strong>
          </>
        ) : (
          date.cardCopy
        )}
      </span>
      <span className="category-arrow" aria-hidden="true">
        ↗
      </span>
    </button>
  )
}

function App() {
  const [selectedDate, setSelectedDate] = useState<CookingDate | null>(null)
  const [selectionSource, setSelectionSource] =
    useState<SelectionSource | null>(null)

  const selectCategory = (date: CookingDate) => {
    setSelectedDate(date)
    setSelectionSource('category')
  }

  const surpriseUs = () => {
    const randomIndex = Math.floor(Math.random() * cookingDates.length)
    setSelectedDate(cookingDates[randomIndex])
    setSelectionSource('surprise')
  }

  return (
    <div className="app-shell" id="top">
      <BrandHeader />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              A little more us-time
            </p>
            <h1 id="hero-title">
              Date night?
              <br />
              <span>We’ve got you.</span>
            </h1>
            <p className="hero-description">
              Good food, better company, and absolutely no need to book a table.
              Let’s make staying in the main event.
            </p>
            <div className="hero-actions">
              <button className="surprise-button" type="button" onClick={surpriseUs}>
                Surprise us! <span aria-hidden="true">✦</span>
              </button>
              <span className="hero-note">Four moods. One very good night.</span>
            </div>
          </div>

          <DateResult selectedDate={selectedDate} source={selectionSource} />
        </section>

        <section className="date-ideas" id="date-ideas" aria-labelledby="ideas-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">Pick your flavour</p>
              <h2 id="ideas-title">What’s the vibe?</h2>
            </div>
            <p className="section-description">
              Choose a mood to reveal your cooking date.
            </p>
          </div>

          <div className="category-grid">
            {cookingDates.map((date, index) => (
              <CategoryCard
                key={date.id}
                date={date}
                index={index}
                isSelected={selectedDate?.id === date.id}
                onSelect={selectCategory}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="footer-heart" aria-hidden="true">
          ♥
        </span>
        Made for two, best served together.
      </footer>
    </div>
  )
}

export default App
