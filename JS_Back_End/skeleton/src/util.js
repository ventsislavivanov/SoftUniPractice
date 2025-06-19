function parseError(err) {
    if (err instanceof Error) {
        if (!err.errors) {
            // Generic error
            err.errors = [err.message];
        } else {
            // Mongoose validaton error
            const error = new Error('Input validaton error');
            error.errors = Object.fromEntries(Object.values(err.errors).map(e => [e.path, e.message]));

            return error;
        }
    } else if (Array.isArray(err)) {
        // Express-validation error array
        const error = new Error('Input validaton error');
        error.errors = Object.fromEntries(err.errors).map(e => [e.path, e.message]);

        return error;
    }

    return err;
}

export { parseError };