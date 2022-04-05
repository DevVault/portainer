import { SidebarMenuItem } from '@/portainer/Sidebar/SidebarMenuItem';
import { EnvironmentId } from '@/portainer/environments/types';
import { Authorized } from '@/portainer/hooks/useUser';
import { SidebarMenu } from '@/portainer/Sidebar/SidebarMenu';

import { KubectlShellButton } from './KubectlShell';

interface Props {
  environmentId: EnvironmentId;
}

export function KubernetesSidebar({ environmentId }: Props) {
  return (
    <>
      <KubectlShellButton environmentId={environmentId} />

      <SidebarMenuItem
        path="kubernetes.dashboard"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-tachometer-alt fa-fw"
        className="sidebar-list"
        data-cy="k8sSidebar-dashboard"
      >
        Dashboard
      </SidebarMenuItem>

      <SidebarMenuItem
        path="kubernetes.templates.custom"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-rocket fa-fw"
        className="sidebar-list"
        data-cy="k8sSidebar-customTemplates"
      >
        Custom Templates
      </SidebarMenuItem>

      <SidebarMenuItem
        path="kubernetes.resourcePools"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-layer-group fa-fw"
        className="sidebar-list"
        data-cy="k8sSidebar-namespaces"
      >
        Namespaces
      </SidebarMenuItem>

      <Authorized authorizations="HelmInstallChart">
        <SidebarMenuItem
          path="kubernetes.templates.helm"
          pathParams={{ endpointId: environmentId }}
          iconClass="fa-dharmachakra fa-fw"
          className="sidebar-list"
          data-cy="k8sSidebar-helm"
        >
          Helm
        </SidebarMenuItem>
      </Authorized>

      <SidebarMenuItem
        path="kubernetes.applications"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-laptop-code fa-fw"
        className="sidebar-list"
        data-cy="k8sSidebar-applications"
      >
        Applications
      </SidebarMenuItem>

      <SidebarMenuItem
        path="kubernetes.configurations"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-file-code fa-fw"
        className="sidebar-list"
        data-cy="k8sSidebar-configurations"
      >
        ConfigMaps & Secrets
      </SidebarMenuItem>

      <SidebarMenuItem
        path="kubernetes.volumes"
        pathParams={{ endpointId: environmentId }}
        iconClass="fa-database fa-fw"
        className="sidebar-list"
        data-cy="k8sSidebar-volumes"
      >
        Volumes
      </SidebarMenuItem>

      <SidebarMenu
        iconClass="fa-server fa-fw"
        label="Cluster"
        path="kubernetes.cluster"
        pathParams={{ endpointId: environmentId }}
        childrenPaths={[
          'kubernetes.cluster',
          'portainer.k8sendpoint.kubernetesConfig',
          'kubernetes.registries',
          'kubernetes.registries.access',
        ]}
        data-cy="k8sSidebar-cluster"
      >
        <Authorized authorizations="K8sClusterSetupRW" adminOnlyCE>
          <SidebarMenuItem
            path="portainer.k8sendpoint.kubernetesConfig"
            pathParams={{ id: environmentId }}
            ident
            data-cy="k8sSidebar-setup"
          >
            Setup
          </SidebarMenuItem>
        </Authorized>

        <SidebarMenuItem
          path="kubernetes.registries"
          pathParams={{ endpointId: environmentId }}
          ident
          data-cy="k8sSidebar-registries"
        >
          Registries
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
