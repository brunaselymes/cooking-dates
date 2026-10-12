import type { RefObject } from 'react'
import type { CookingDate } from './cookingDates'

type CookingDatePageProps = {
  date: CookingDate
  headingRef: RefObject<HTMLHeadingElement | null>
}

function CookingDatePage({ date, headingRef }: CookingDatePageProps) {
  const experience = date.experience

  if (!experience) return null

  return (
    <article className="experience-page" aria-labelledby="experience-title">
      <section className="experience-hero">
        <div className="experience-hero-copy">
          <p className="experience-category">
            <span aria-hidden="true">✳</span> {date.category}
          </p>
          <h1 id="experience-title" ref={headingRef} tabIndex={-1}>
            {date.title}
          </h1>
          <p className="experience-tagline">{date.description}</p>

          <dl className="experience-overview" aria-label="Date overview">
            <div>
              <dt>Time</dt>
              <dd>{experience.overview.duration}</dd>
            </div>
            <div>
              <dt>Serves</dt>
              <dd>{experience.overview.serves}</dd>
            </div>
            <div>
              <dt>Difficulty</dt>
              <dd>{experience.overview.difficulty}</dd>
            </div>
          </dl>
        </div>

        <div className="experience-hero-art" aria-hidden="true">
          <span className="hero-art-spark hero-art-spark--one">✦</span>
          <span className="hero-art-spark hero-art-spark--two">✳</span>
          <span className="hero-art-emoji">{date.emoji}</span>
          <span className="hero-art-caption">a little zest<br />for your night</span>
        </div>
      </section>

      <div className="experience-content">
        <section className="experience-panel recipe-panel" aria-labelledby="recipe-title">
          <div className="experience-section-heading">
            <div>
              <p className="section-kicker">01 / Make something lovely</p>
              <h2 id="recipe-title">A recipe for catching up</h2>
            </div>
            <span className="recipe-time">{experience.recipe.time}</span>
          </div>
          <div className="recipe-intro">
            <h3>{experience.recipe.title}</h3>
            <p>{experience.recipe.introduction}</p>
          </div>

          <div className="recipe-layout">
            <section className="ingredients-card" aria-labelledby="ingredients-title">
              <h3 id="ingredients-title">What you’ll need</h3>
              <p className="ingredients-serves">For two, with no odd leftovers.</p>
              <ul className="ingredient-list">
                {experience.recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    <span className="ingredient-amount">{ingredient.amount}</span>
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="method-card" aria-labelledby="method-title">
              <h3 id="method-title">Let’s make it</h3>
              <ol className="method-list">
                {experience.recipe.steps.map((step, index) => (
                  <li key={step.title}>
                    <span className="step-number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </section>

        <section className="experience-panel together-panel" aria-labelledby="together-title">
          <div className="experience-section-heading">
            <div>
              <p className="section-kicker">02 / Two pairs of hands</p>
              <h2 id="together-title">Cooking together</h2>
            </div>
            <p className="section-side-note">Divide, conquer, reunite by the stove.</p>
          </div>
          <div className="task-grid">
            <TaskGroup title="Person A" tasks={experience.cookingTogether.personA} />
            <TaskGroup title="Person B" tasks={experience.cookingTogether.personB} />
            <TaskGroup title="Together" tasks={experience.cookingTogether.together} />
          </div>
        </section>

        <section className="experience-panel conversation-panel" aria-labelledby="conversation-title">
          <div className="conversation-heading">
            <p className="section-kicker">03 / The good stuff</p>
            <h2 id="conversation-title">The little things we might not know about each other.</h2>
            <p>Pull up a stool and see where the conversation goes.</p>
          </div>
          <ol className="question-list">
            {experience.conversation.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
          <p className="conversation-note">{experience.conversation.note}</p>
        </section>

        <aside className="optional-extra" aria-labelledby="extra-title">
          <span className="extra-sparkle" aria-hidden="true">✦</span>
          <div>
            <p className="section-kicker">Optional little extra</p>
            <h2 id="extra-title">{experience.optionalExtra.title}</h2>
            <p>{experience.optionalExtra.description}</p>
          </div>
          <span className="extra-doodle" aria-hidden="true">♡</span>
        </aside>
      </div>
    </article>
  )
}

function TaskGroup({ title, tasks }: { title: string; tasks: string[] }) {
  const headingId = `task-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <section className="task-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{title}</h3>
      <ul>
        {tasks.map((task) => <li key={task}>{task}</li>)}
      </ul>
    </section>
  )
}

export default CookingDatePage
