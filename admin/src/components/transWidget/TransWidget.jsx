import React from "react";
import "./transWidget.css";

const TransWidget = () => {
  const Button = ({ type }) => {
    return <button className={"widget-bt " + type}>{type}</button>;
  };

  return (
    <div className="trans-widget">
      <span className="widget-title">Latest Transactions</span>
      <table className="widget-table">
        <thead>
          <tr className="widget-tr">
            <th className="widget-th">Customer</th>
            <th className="widget-th">Date</th>
            <th className="widget-th">Amount</th>
            <th className="widget-th">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widget-tr">
            <td className="widget-user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widget-img"
              />
              <span className="widget-user-name">Susan Carol</span>
            </td>
            <td className="widget-date">2 Jun 2023</td>
            <td className="widget-amt">Rs.500</td>
            <td className="widget-status">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widget-tr">
            <td className="widget-user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widget-img"
              />
              <span className="widget-user-name">Susan Carol</span>
            </td>
            <td className="widget-date">2 Jun 2023</td>
            <td className="widget-amt">Rs.500</td>
            <td className="widget-status">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widget-tr">
            <td className="widget-user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widget-img"
              />
              <span className="widget-user-name">Susan Carol</span>
            </td>
            <td className="widget-date">2 Jun 2023</td>
            <td className="widget-amt">Rs.500</td>
            <td className="widget-status">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widget-tr">
            <td className="widget-user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widget-img"
              />
              <span className="widget-user-name">Susan Carol</span>
            </td>
            <td className="widget-date">2 Jun 2023</td>
            <td className="widget-amt">Rs.500</td>
            <td className="widget-status">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransWidget;
