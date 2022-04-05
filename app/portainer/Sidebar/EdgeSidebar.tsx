import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarSection } from './SidebarSection';

export function EdgeSidebar() {
  return (
    <SidebarSection title="Edge compute">
      <SidebarMenuItem
        path="edge.devices"
        iconClass="fas fa-laptop-code fa-fw"
        className="sidebar-list"
        data-cy="portainerSidebar-edgeDevices"
      >
        Edge Devices
      </SidebarMenuItem>
      <SidebarMenuItem
        path="edge.groups"
        iconClass="fa-object-group fa-fw"
        className="sidebar-list"
        data-cy="portainerSidebar-edgeGroups"
      >
        Edge Groups
      </SidebarMenuItem>
      <SidebarMenuItem
        path="edge.stacks"
        iconClass="fa-layer-group fa-fw"
        className="sidebar-list"
        data-cy="portainerSidebar-edgeStacks"
      >
        Edge Stacks
      </SidebarMenuItem>
      <SidebarMenuItem
        path="edge.jobs"
        iconClass="fa-clock fa-fw"
        className="sidebar-list"
        data-cy="portainerSidebar-edgeJobs"
      >
        Edge Jobs
      </SidebarMenuItem>
    </SidebarSection>
  );
}
