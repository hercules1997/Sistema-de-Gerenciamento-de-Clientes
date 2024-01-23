import PropTypes from "prop-types";
import { ClientProvider } from "./ClientContext";



const AppProvider = ({ children }) => (
  <ClientProvider>{children}</ClientProvider>
);

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
