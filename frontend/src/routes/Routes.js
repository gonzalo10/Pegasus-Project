import GameContainer from '../containers/GameContainer';
import GamesContainer from '../containers/GamesContainer';
import ErrorPage from '../components/errors/errorPage';

export default [
	{
		component: GamesContainer,
		path: '/',
		exact: true,
	},
	{
		component: ErrorPage,
		path: '/404',
	},
	{
		component: GameContainer,
		path: '/:id',
	},
];
