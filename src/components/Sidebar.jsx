import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Monitor, Network, Briefcase, Cpu, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { topics } from '../data/topics';
import './Sidebar.css';

const iconMap = {
    Home: <Home size={20} />,
    Monitor: <Monitor size={20} />,
    Network: <Network size={20} />,
    Briefcase: <Briefcase size={20} />,
    Cpu: <Cpu size={20} />,
    Shield: <ShieldCheck size={20} />,
};

const Sidebar = memo(function Sidebar({ isCollapsed, setIsCollapsed }) {
    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button
                className="sidebar-toggle"
                onClick={() => setIsCollapsed(!isCollapsed)}
                title={isCollapsed ? "Sidebar ausfahren" : "Sidebar einfahren"}
            >
                {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>

            <div className="sidebar-logo">
                <div className="logo-icon">AP1</div>
                {!isCollapsed && <span>FISI Prep</span>}
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <Home size={20} />
                    {!isCollapsed && <span>Home</span>}
                </NavLink>

                {!isCollapsed && <div className="nav-separator">Themen</div>}

                {topics.map((topic) => (
                    <NavLink
                        key={topic.id}
                        to={`/topic/${topic.id}`}
                        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                        title={isCollapsed ? topic.title : ""}
                    >
                        {iconMap[topic.icon] || <Monitor size={20} />}
                        {!isCollapsed && <span>{topic.title}</span>}
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                {!isCollapsed ? <p>© 2026 FISI Prep</p> : <p>2026</p>}
            </div>
        </aside>
    );
});

export default Sidebar;
