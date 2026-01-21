import { useState } from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

export default function Layout({ children }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`layout ${isCollapsed ? 'collapsed' : ''}`}>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className="layout-content">
                <header className="layout-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Themen durchsuchen..." />
                    </div>
                    <div className="user-profile">
                        <div className="avatar">AS</div>
                    </div>
                </header>
                <div className="content-inner">
                    {children}
                </div>
            </main>
        </div>
    );
}
