import { features } from '../data/features'
import FeatureCard from './FeatureCard'

function Features() {
  return (
    <section className="features">
      <div className="features-inner">
        <p className="section-label">Plan your visit</p>
        <h2>Book it, bake it, celebrate it</h2>
        <div className="feature-grid">
          {features.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              button={item.button}
              color={item.color}
              icon={item.icon}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features