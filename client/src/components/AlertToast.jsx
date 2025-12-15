import { Toast, ToastContainer } from "react-bootstrap";

const AlertToast = (props) => {
  const { show, setShow, children, variant } = props;

  return (
    <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
      <Toast
        show={show}
        onClose={() => setShow(false)}
        delay={3000}
        autohide
        bg={variant}
      >
        <Toast.Body className={"text-white"}>{children}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default AlertToast;
