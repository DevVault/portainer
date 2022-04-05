import { SidebarMenu } from './SidebarMenu';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarSection } from './SidebarSection';
import { SidebarMenuItemWrapper } from './SidebarMenuItem/SidebarMenuItem';

interface Props {
  isAdmin: boolean;
}

export function SettingsSidebar({ isAdmin }: Props) {
  return (
    <SidebarSection title="Settings">
      <SidebarMenu
        iconClass="fa-users fa-fw"
        label="Users"
        path="portainer.users"
        childrenPaths={[
          'portainer.users.user',
          'portainer.teams',
          'portainer.teams.team',
          'portainer.roles',
          'portainer.roles.role',
          'portainer.roles.new',
        ]}
      >
        <SidebarMenuItem
          path="portainer.teams"
          ident
          data-cy="portainerSidebar-teams"
        >
          Teams
        </SidebarMenuItem>
        {isAdmin && (
          <SidebarMenuItem
            path="portainer.roles"
            ident
            data-cy="portainerSidebar-roles"
          >
            Roles
          </SidebarMenuItem>
        )}
      </SidebarMenu>

      {isAdmin && (
        <>
          <SidebarMenu
            iconClass="fa-plug fa-fw"
            label="Environments"
            path="portainer.endpoints"
            childrenPaths={[
              'portainer.endpoints.endpoint',
              'portainer.endpoints.new',
              'portainer.endpoints.endpoint.access',
              'portainer.groups',
              'portainer.groups.group',
              'portainer.groups.group.access',
              'portainer.groups.new',
              'portainer.tags',
            ]}
          >
            <SidebarMenuItem
              path="portainer.groups"
              ident
              data-cy="portainerSidebar-endpointGroups"
            >
              Groups
            </SidebarMenuItem>
            <SidebarMenuItem
              path="portainer.tags"
              ident
              data-cy="portainerSidebar-endpointTags"
            >
              Tags
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenuItem
            path="portainer.registries"
            iconClass="fa-database fa-fw"
            className="sidebar-list"
            data-cy="portainerSidebar-registries"
          >
            Registries
          </SidebarMenuItem>

          <SidebarMenuItem
            path="portainer.licenses"
            iconClass="fa-file-signature fa-fw"
            className="sidebar-list"
            data-cy="portainerSidebar-licenses"
          >
            Licenses
          </SidebarMenuItem>

          <SidebarMenu
            label="Authentication logs"
            iconClass="fa-history fa-fw"
            path="portainer.authLogs"
            childrenPaths={['portainer.activityLogs']}
          >
            <SidebarMenuItem
              path="portainer.activityLogs"
              ident
              data-cy="portainerSidebar-activityLogs"
            >
              Activity Logs
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu
            label="Settings"
            iconClass="fa-cogs fa-fw"
            path="portainer.settings"
            childrenPaths={[
              'portainer.settings.authentication',
              'portainer.settings.edgeCompute',
            ]}
          >
            <SidebarMenuItem
              path="portainer.settings.authentication"
              ident
              data-cy="portainerSidebar-authentication"
            >
              Authentication
            </SidebarMenuItem>
            <SidebarMenuItem
              path="portainer.settings.edgeCompute"
              ident
              data-cy="portainerSidebar-edge-compute"
            >
              Edge Compute
            </SidebarMenuItem>

            <SidebarMenuItemWrapper ident>
              <a
                href={
                  process.env.PORTAINER_EDITION === 'CE'
                    ? 'https://www.portainer.io/community_help'
                    : 'https://documentation.portainer.io/r/business-support'
                }
                target="_blank"
                data-cy="portainerSidebar-help"
                rel="noreferrer"
              >
                Help / About
              </a>
            </SidebarMenuItemWrapper>
          </SidebarMenu>
        </>
      )}
    </SidebarSection>
  );
}
