import { legacy_createStore as createStore } from 'redux';
import { BlogReducer } from '../Components/redux/reducer/reducer';
import thunk from "redux-thunk";
import { applyMiddleware, compose} from "redux"

const store= createStore(BlogReducer, compose(applyMiddleware(thunk)))
export default store;