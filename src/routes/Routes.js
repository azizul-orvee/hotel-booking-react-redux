import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../components/HomePage/Home/Home'));
const RoomSelection = lazy(() =>
  import('../components/RoomSelectionPage/RoomSelection/RoomSelection')
);
const RoomDetails = lazy(() =>
  import('../components/RoomDetailsPage/RoomDetails/RoomDetails')
);
const BookingAgreement = lazy(() =>
  import('../components/BookingAgreementPage/BookingAgreement/BookingAgreement')
);
const TravelPurpose = lazy(() =>
  import('../components/TravelPurposePage/TravelPurpose/TravelPurpose')
);
const Payment = lazy(() => import('../components/PaymentPage/Payment/Payment'));
const Authentication = lazy(() =>
  import('../components/AuthenticationPage/Authentication/Authentication')
);
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'room-selection',
    path: '/room-selection',
    element: (
      <PrivateRoute>
        <RoomSelection />
      </PrivateRoute>
    ),
  },
  {
    name: 'room-details',
    path: '/room-details',
    element: (
      <PrivateRoute>
        <RoomDetails />
      </PrivateRoute>
    ),
  },
  {
    name: 'booking-agreement',
    path: '/booking-agreement',
    element: (
      <PrivateRoute>
        <BookingAgreement />
      </PrivateRoute>
    ),
  },
  {
    name: 'travel-purpose',
    path: '/travel-purpose',
    element: (
      <PrivateRoute>
        <TravelPurpose />
      </PrivateRoute>
    ),
  },
  {
    name: 'payment',
    path: '/payment',
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    name: 'login',
    path: '/login',
    element: <Authentication />,
  },
  {
    name: 'Not_Found',
    path: '*',
    element: <NotFound />,
  },
];
