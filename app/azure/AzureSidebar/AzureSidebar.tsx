import { SidebarMenuItem } from '@/portainer/Sidebar/SidebarMenuItem';
import { EnvironmentId } from '@/portainer/environments/types';

interface Props {
  environmentId: EnvironmentId;
}

export function AzureSidebar({ environmentId }: Props) {
  return (
    <>
      <SidebarMenuItem
        path="azure.dashboard"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-tachometer-alt fa-fw"
        className="sidebar-list"
        data-cy="azureSidebar-dashboard"
      >
        Dashboard
      </SidebarMenuItem>
      <SidebarMenuItem
        path="azure.containerinstances"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-cubes fa-fw"
        className="sidebar-list"
        data-cy="azureSidebar-containerInstances"
      >
        Container instances
      </SidebarMenuItem>
    </>
  );
}
