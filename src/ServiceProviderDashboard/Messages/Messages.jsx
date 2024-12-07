import styles from './Messages.module.css'

import Header from "../Components/Header/Header";

const MessageData = [
    {
      profilePic: "/Assets/Message/Images/profile_pic.svg",
      name: "Akash",
      text: "Hello! Hii 👋",
      time: "4:30 PM",
      unreadMessage: 1,
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic.svg",
      name: "Akash",
      text: "Hello! Hii 👋",
      time: "4:30 PM",
      unreadMessage: 1,
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic.svg",
      name: "Akash",
      text: "Hello! Hii 👋",
      time: "4:30 PM",
      unreadMessage: 1,
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic.svg",
      name: "Akash",
      text: "Hello! Hii 👋",
      time: "4:30 PM",
      unreadMessage: 1,
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic.svg",
      name: "Akash",
      text: "Hello! Hii 👋",
      time: "4:30 PM",
      unreadMessage: 1,
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic1.svg",
      name: "Akash",
      text: "Wow really Cool 🔥",
      time: "4:30 PM",
      unreadMessage: "",
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic1.svg",
      name: "Akash",
      text: "Wow really Cool 🔥",
      time: "4:30 PM",
      unreadMessage: "",
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic1.svg",
      name: "Akash",
      text: "Wow really Cool 🔥",
      time: "4:30 PM",
      unreadMessage: "",
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic1.svg",
      name: "Akash",
      text: "Wow really Cool 🔥",
      time: "4:30 PM",
      unreadMessage: "",
    },
    {
      profilePic: "/Assets/Message/Images/profile_pic1.svg",
      name: "Akash",
      text: "Wow really Cool 🔥",
      time: "4:30 PM",
      unreadMessage: "",
    },
  ];

const Messages = () => {
  return (
    <div className={styles.message_page}>
      <Header title="Messages" />
      <div className={styles.message_list}>
        <div className={styles.connect_left_chat_box}>
          <img
            src="/Assets/Message/Images/connect_logo.svg"
            className={styles.profile_img}
            alt="..."
          />
          <div className={styles.message_box}>
            <div className={styles.message}>
              <div className={styles.text}>CONNECT AI</div>
            </div>
            <div className={styles.message}>
              <div className={styles.time}>4:30 PM</div>
              <div className={styles.unread_count}>
                <img
                  src="/Assets/Message/Images/pin_message.svg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        {MessageData.map((item, index) => (
          <div className={styles.left_chat_box} key={index}>
            <img
              src={item.profilePic}
              className={styles.profile_img}
              alt="..."
            />
            <div className={styles.outer_dot}>
              <div className={styles.status_dot}></div>
            </div>
            <div className={styles.message_box}>
              <div className={styles.message}>
                <div className={styles.text}>{item.name}</div>
                <div className={styles.label}>{item.text}</div>
              </div>
              <div className={styles.message}>
                <div className={styles.time}>{item.time}</div>
                <div className={styles.unread_count}>
                  {item.unreadMessage === 1 ? (
                    <span className={styles.unread_message}>
                      {item.unreadMessage}
                    </span>
                  ) : (
                    <span>{item.unreadMessage}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
