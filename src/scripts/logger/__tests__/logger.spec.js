import { createLogger } from '../logger';

it('log', () => {
  const logger = createLogger('user login');
  expect(logger.getLoggs()).toEqual([]);
});

it('log', () => {
  const logger = createLogger('user login');
  logger.log('login success');

  expect(logger.getLoggs()).toEqual(['log - user login - login success']);
});
