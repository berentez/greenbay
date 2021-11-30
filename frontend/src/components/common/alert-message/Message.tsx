import { Alert } from '@material-ui/lab';

import './message.scss';

interface MessageProps {
  type: string;
  text: string;
  classGot?: string;
}

const Message: React.FC<MessageProps> = ({ type, text, classGot }) => {
  return (
    <div className={`message ${classGot}`}>
      {type === 'error' && <Alert severity={type}>{text}</Alert>}
      {type === 'success' && <Alert severity={type}>{text}</Alert>}
      {type === 'info' && <Alert severity={type}>{text}</Alert>}
    </div>
  );
};

export default Message;
