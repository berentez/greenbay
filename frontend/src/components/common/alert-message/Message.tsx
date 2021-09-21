import { Alert } from '@material-ui/lab';

interface MessageProps {
  type: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ type, text }) => {
  return (
    <div className="message">
      {type === 'error' && <Alert severity={type}>{text}</Alert>}
      {type === 'success' && <Alert severity={type}>{text}</Alert>}
      {type === 'info' && <Alert severity={type}>{text}</Alert>}
    </div>
  );
};

export default Message;
