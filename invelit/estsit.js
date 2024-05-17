app.get('/protected-resource', (req, res) => {
  if (!req.user.isAuthenticated) {
    return res.status(401).send('Unauthorized');
  }
  // Code to display the protected resource
});
