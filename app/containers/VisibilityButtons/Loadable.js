/**
 *
 * Asynchronously loads the component for VisibilityButtons
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
