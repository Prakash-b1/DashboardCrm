import { ICONS } from "../../../Assets/Icons";
import Button from "../../Components/Button/Button";
import Styles from "./OrderManagement.module.css";
import "../../../utils/utilsCss/utilsCss.css";

const OrderManagement = () => {
  const Orders = [
    {
      order_id: 123456789,
      order_name: "Service name",
      order_time: "Just now",
    },
    {
      order_id: 123456789,
      order_name: "Service name",
      order_time: "Mon, 3 Jun at 05:39 PM",
    },
    {
      order_id: 123456789,
      order_name: "Service name",
      order_time: "Sun,2 Jun at 01:05 PM",
    },
    {
      order_id: 123456789,
      order_name: "Service name",
      order_time: "Sat, 1 Jun at 06:20 PM",
    },
  ];
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.left_container}>
          <div className={Styles.left_box}>
            <div className={`${Styles.left_detail} center-vertical`}>
              <span className={Styles.left_img}>{ICONS.pendingOrderIcon}</span>
              <div className={`column`}>
                <h1>100</h1>
                <p>Pending Orders</p>
              </div>
            </div>
            <span className={`${Styles.change} ${Styles.negative}`}>
              -10.02%
            </span>
          </div>
          <div className={Styles.left_box}>
            <div className={`${Styles.left_detail} center-vertical`}>
              <span className={Styles.left_img}>{ICONS.inProcessIcon}</span>
              <div className={`column`}>
                <h1>25</h1>
                <p>In Process Orders</p>
              </div>
            </div>

            <div className={`${Styles.change} ${Styles.positive}`}>+11.02%</div>
          </div>
          <div className={Styles.left_box}>
            <div className={`${Styles.left_detail} center-vertical`}>
              <span className={Styles.left_img}>{ICONS.completedIcon}</span>
              <div className={`column`}>
                <h1>40</h1>
                <p>Completed Orders</p>
              </div>
            </div>
            <span className={`${Styles.change} ${Styles.negative}`}>
              -10.02%
            </span>
          </div>
          <div className={Styles.left_box}>
            <div className={`${Styles.left_detail} center-vertical`}>
              <span className={Styles.left_img}>{ICONS.canceledIcon}</span>
              <div className={`column`}>
                <h1>25</h1>
                <p>Canceled Orders</p>
              </div>
            </div>
            <span className={`${Styles.change} ${Styles.positive}`}>
              +11.02%
            </span>
          </div>
        </div>
        <div className={Styles.right_container}>
          <div className={Styles.header}>
            <h2>New Orders (10)</h2>
            <a href="#">View all</a>
          </div>
          {Orders.map((item) => (
            <div key={item.name} className={Styles.right_box}>
              <div className={Styles.right_data}>
                <p>{item.order_name}</p>
                <p className={Styles.order_id}>
                  Order ID: <span>{item.order_id}</span>
                </p>
                <div className={Styles.actions}>
                  <Button
                    text="Accept"
                    backgroundColor="rgba(4, 163, 73, 1)"
                    color="#fff"
                  />
                  <Button
                    text="Reject"
                    backgroundColor="#fff"
                    color="rgba(228, 50, 50, 1)"
                    borderColor="rgba(228, 50, 50, 1)"
                  />
                </div>
              </div>
              <span className={Styles.right_bottom_data}>
                {item.order_time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderManagement;
