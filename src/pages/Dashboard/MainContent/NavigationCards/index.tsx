import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Button from '../../../../components/Button';
import { DEFAULT_TRANSITION } from '../../../../constants';

import { cardsNavigation } from '../../../../resources';

import {
  Container,
  Card,
  Navigation
} from './styles';

const containerAnimation = {
  unMounted: { y: 50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 1,
    }
  },
}

const cardsAnimation = {
  unMounted: { y: 50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
  },
}

const AnimatedCard = motion.custom(Card);

const NavigationCards: React.FC = () => {
  return (
    <Container
      layout
      variants={containerAnimation}
      transition={DEFAULT_TRANSITION}
    >
      <Navigation>
        {
          Object.entries(cardsNavigation).map(([key, value]) => (
            <AnimatedCard
              key={`card-${key}`}
              variants={cardsAnimation}
              transition={DEFAULT_TRANSITION}
              whileHover={{ y: -3 }}
              whileTap={{ y: 15 }}
              layout
            >
              <div>
                {value.icon}
              </div>
              {key}
            </AnimatedCard>
          ))
        }
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </Container>
  );
};

export default NavigationCards;
