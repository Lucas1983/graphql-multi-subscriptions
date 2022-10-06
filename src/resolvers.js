import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const resolvers = {

    Subscription: {
        objectPublished: {
            subscribe: (_parent, args, _context, _info) => {
                console.log('Subscription established for topic: %j', args.topic)
                return pubsub.asyncIterator([args.topic])
            },
        },
    },

    Mutation: {
        publishObject(parent, args, context) {
            console.log('Invoked mutation using object: %j', args.input);
            pubsub.publish(args.input.topic, {objectPublished: args.input});
            return args.input;
        }
    },
};
export default resolvers