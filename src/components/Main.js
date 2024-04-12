import { useReducer } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Booking from './Booking';
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m)/m;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getTime()); // Use getTime() to get a timestamp from the Date object
    for (let i = 17; i <=23; i++){
      if(random() < 0.5){
        result.push(i + ':00');
      }
      if(random() > 0.5){
        result.push(i + ':30');
      }
    }
    return result; // Return an array directly
  }

  // Usage in Main component
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const submitAPI = function (formData) {
    return true;
  };

  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  const SubmitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route
          path='/booking'
          element={<Booking availableTimes={state.availableTimes} SubmitForm={SubmitForm} dispatch={dispatch} />}
        />
        <Route path='confirmed' element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;