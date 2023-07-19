// const tf = require('@tensorflow/tfjs');

// // Define the model architecture
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 16, activation: 'relu', inputShape: [3] }));
// model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
// model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// // Compile the model
// model.compile({ loss: 'binaryCrossentropy', optimizer: 'adam' });

// // Define the training data
// const trainingData = {
//   inputs: tf.tensor2d([[0.1, 0.05, 0.15], [0.05, 0.08, 0.12], [0.2, 0.1, 0.3], [0.3, 0.2, 0.1]]),
//   labels: tf.tensor2d([[0], [0], [1], [1]])
// };

// // Train the model
// model.fit(trainingData.inputs, trainingData.labels, { epochs: 50 })
//   .then(() => {
//     console.log('Training completed.');
    
//     // Define a new sample for prediction
//     const sample = tf.tensor2d([[0.25, 0.12, 0.35]]);
    
//     // Make predictions on the new sample
//     const predictions = model.predict(sample);
//     predictions.print();
//   })
//   .catch((error) => {
//     console.error('Error during training:', error);
//   });
