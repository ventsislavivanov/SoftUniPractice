function parseError(err) {
    if (err instanceof Error) {
        if (!err.errors) {
            // Generic error
            return {
                message: err.message,
                errors: { message: err.message },
            };
        } else {
            // Mongoose validation error
            const errors = Object.fromEntries(
                Object.values(err.errors).map(e => [e.path, e.message])
            );

            return {
                message: 'Input validation error',
                errors
            };
        }
    } else if (Array.isArray(err)) {
        // Express-validator error array
        const errors = Object.fromEntries(
            err.map(e => [e.path, e.msg])
        );

        return {
            message: 'Input validation error',
            errors
        };
    }

    return {
        message: 'Unknown error',
        errors: {}
    };
}

export { parseError };
