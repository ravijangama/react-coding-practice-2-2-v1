const Notification = (props) => {
  //  Write your code here.
  const { className, message, path } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img src={path} className="icon" />
      <p className="notify">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="notification">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="information"
        message="Information Message"
        path="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        message="Success Message"
        path="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        message="Warning Message"
        path="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="danger"
        message="Error Message"
        path="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
