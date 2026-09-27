/**
 * Problem: Asynchronous Pipeline Refactoring
 * Category: JavaScript Asynchronous Patterns
 *
 * Description:
 * Demonstrates the evolution of handling dependent asynchronous workflows in JavaScript:
 * 1. Callback Hell (Nested error-first callbacks)
 * 2. Promise Chaining (.then / .catch)
 * 3. Modern async/await with try/catch
 */

const fs = require("fs").promises;

// ==========================================
// 1. Promisified Asynchronous Services
// ==========================================

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "Developer",
        email: "dev@example.com",
      });
    }, 100);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, userId, total: 1200 },
        { id: 102, userId, total: 800 },
      ]);
    }, 100);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId,
        items: [
          { name: "Mechanical Keyboard", price: 700 },
          { name: "Ergonomic Mouse", price: 500 },
        ],
      });
    }, 100);
  });
}

function processPayment(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        paymentId: "PAY-1002",
        orderId: order.orderId,
        status: "success",
      });
    }, 100);
  });
}

function sendNotification(email, payment) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Notification sent to ${email} for payment ${payment.paymentId}`);
      resolve();
    }, 100);
  });
}

// ==========================================
// Approach A: Promise Chaining (.then / .catch)
// ==========================================

function runWithPromiseChaining() {
  let user, orderDetails, payment;

  return getUser(1)
    .then((userData) => {
      user = userData;
      return getOrders(user.id);
    })
    .then((orders) => {
      return getOrderDetails(orders[0].id);
    })
    .then((details) => {
      orderDetails = details;
      return processPayment(orderDetails);
    })
    .then((paymentData) => {
      payment = paymentData;
      return sendNotification(user.email, payment);
    })
    .then(() => {
      console.log("Completed via Promise Chaining");
    })
    .catch((err) => {
      console.error("Error in promise chain:", err);
    });
}

// ==========================================
// Approach B: Modern async / await (Standard)
// ==========================================

async function runWithAsyncAwait() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.id);
    const orderDetails = await getOrderDetails(orders[0].id);
    const payment = await processPayment(orderDetails);

    await sendNotification(user.email, payment);
    console.log("Completed via async/await");
    return { user, orderDetails, payment };
  } catch (err) {
    console.error("Error in async/await execution:", err);
    throw err;
  }
}

// Example Execution
if (require.main === module) {
  runWithAsyncAwait();
}

module.exports = {
  getUser,
  getOrders,
  getOrderDetails,
  processPayment,
  sendNotification,
  runWithPromiseChaining,
  runWithAsyncAwait,
};
