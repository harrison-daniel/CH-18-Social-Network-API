// app.post('/submit', ({ body }, res) => {
//   Note.create(body)
//     .then((dbNote) => {
//       res.json(dbNote);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.get('/all', (req, res) => {
//   Note.find({})
//     .then((dbNote) => {
//       res.json(dbNote);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.put('/update/:id', ({ params, body }, res) => {
//   Note.findOneAndUpdate({ _id: params.id }, body, { new: true })
//     .then((dbNote) => {
//       if (!dbNote) {
//         res.json({ message: 'No note found with this id!' });
//         return;
//       }
//       res.json(dbNote);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.delete('/delete/:id', ({ params }, res) => {
//   Note.findOneAndDelete({ _id: params.id })
//     .then((dbNote) => {
//       if (!dbNote) {
//         res.json({ message: 'No note found with this id!' });
//         return;
//       }
//       res.json(dbNote);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });