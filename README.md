# What is FEED MO?

`Feedmo(2022~)` is Free Feedback Service for Web Developer.
After to join our service(quickly), you can use Feedback Service as RESTful API.

- Recommendation

```typescript
const postFeedback = async () => {
    await axios.post('Preparing to publish...', {
        authentication: 'your access token',
        refreshtoken: 'your refresh token'
    }, {
        // include user's feedback, after set your base form
    });
}
```

We record feedback depends on your origin URL with Token Authentication.

- Basically, Token don't include your private data for Safety.
- So, if you wanna use some services, need Private Data, you must visit our Official Site.
