const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log('before state', store.getState());
  console.log('action', action);
  console.log('next', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

// const loggerMiddleware2 = function loggerMiddleware(store){
// 	return function(next){
// 		return function(action){

// 		}
// 	}
// }
