import { useState } from "react";

export default function AddWeightForm({ onSubmit, disabled }) {
    const [weight, setWeight] = useState('');

    const handleSubmit = () => {
        onSubmit(weight);
    }
    return (
        <div>
            Add today's weight
            <input disabled={disabled} type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
            <button disabled={disabled} onClick={handleSubmit}>Add Weight</button>
        </div>
    );
}