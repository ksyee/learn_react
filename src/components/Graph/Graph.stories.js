import Graph from './Graph';

const metaConfig = {
  title: 'components/Graph',
  component: Graph,
  tags: ['autodocs'],
};

export default metaConfig;

export const Base = {
  args: {
    start: 10,
    end: 20,
  },
};

Base.storyName = '1-5까지 그래프';

export const Second = {
  args: {
    start: 5,
    end: 20,
  },
};

Second.storyName = '5-20(5)까지 그래프';
