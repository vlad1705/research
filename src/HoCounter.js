import React, { useState } from 'react';

const UpdatedComponent = (OriginalComponent, incrementNum) => {
    function NewComponent() {
        const [count, changeCount] = useState(0)
        return (
            <OriginalComponent count={count} func={() => changeCount(count => count + incrementNum)} />
        )
    }
    return NewComponent
}

export default UpdatedComponent