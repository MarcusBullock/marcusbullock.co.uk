import { useState } from 'react';
import SelectedTabContext from './SelectedTabContext';

function SelectedTabContextProvider({ children }) {
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <SelectedTabContext.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </SelectedTabContext.Provider>
    );
}

export default SelectedTabContextProvider;
