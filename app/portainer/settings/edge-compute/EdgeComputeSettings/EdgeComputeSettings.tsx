import { Formik, Form, Field } from 'formik';

import { Switch } from '@/portainer/components/form-components/SwitchField/Switch';
import { FormControl } from '@/portainer/components/form-components/FormControl';
import { Widget, WidgetBody, WidgetTitle } from '@/portainer/components/widget';
import { LoadingButton } from '@/portainer/components/Button/LoadingButton';
import { TextTip } from '@/portainer/components/Tip/TextTip';
import { Input } from '@/portainer/components/form-components/Input';
import { EdgeCheckinIntervalField } from '@/edge/components/EdgeCheckInIntervalField';
import { FormSectionTitle } from '@/portainer/components/form-components/FormSectionTitle';

import { Settings } from '../types';

import styles from './EdgeComputeSettings.module.css';
import { validationSchema } from './EdgeComputeSettings.validation';

export interface FormValues {
  EdgeAgentCheckinInterval: number;
  EnableEdgeComputeFeatures: boolean;
  DisableTrustOnFirstConnect: boolean;
  EnforceEdgeID: boolean;
  EdgePortainerUrl: string;
}

interface Props {
  settings?: Settings;
  onSubmit(values: FormValues): void;
}

export function EdgeComputeSettings({ settings, onSubmit }: Props) {
  if (!settings) {
    return null;
  }

  return (
    <div className="row">
      <Widget>
        <WidgetTitle icon="fa-laptop" title="Edge Compute settings" />
        <WidgetBody>
          <Formik
            initialValues={settings}
            enableReinitialize
            validationSchema={() => validationSchema()}
            onSubmit={onSubmit}
            validateOnMount
          >
            {({
              values,
              errors,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              isValid,
              dirty,
            }) => (
              <Form
                className="form-horizontal"
                onSubmit={handleSubmit}
                noValidate
              >
                <FormControl
                  inputId="edge_enable"
                  label="Enable Edge Compute features"
                  size="medium"
                  errors={errors.EnableEdgeComputeFeatures}
                >
                  <Switch
                    id="edge_enable"
                    name="edge_enable"
                    className="space-right"
                    checked={values.EnableEdgeComputeFeatures}
                    onChange={(e) =>
                      setFieldValue('EnableEdgeComputeFeatures', e)
                    }
                  />
                </FormControl>

                <TextTip color="blue">
                  When enabled, this will enable Portainer to execute Edge
                  Device features.
                </TextTip>

                <FormControl
                  inputId="edge_enforce_id"
                  label="Enforce use of Portainer generated Edge ID’s"
                  size="medium"
                  errors={errors.EnforceEdgeID}
                >
                  <Switch
                    id="edge_enforce_id"
                    name="edge_enforce_id"
                    className="space-right"
                    checked={values.EnforceEdgeID}
                    onChange={(e) =>
                      setFieldValue('EnforceEdgeID', e.valueOf())
                    }
                  />
                </FormControl>

                <FormControl
                  label="Portainer URL"
                  tooltip="URL of the Portainer instance that the agent will use to initiate the communications."
                  inputId="url-input"
                  errors={errors.EdgePortainerUrl}
                  size="medium"
                >
                  <Field as={Input} id="url-input" name="EdgePortainerUrl" />
                </FormControl>

                <FormSectionTitle>Check-in Intervals</FormSectionTitle>

                <EdgeCheckinIntervalField
                  value={values.EdgeAgentCheckinInterval}
                  onChange={(value) =>
                    setFieldValue('EdgeAgentCheckinInterval', value)
                  }
                  isDefaultHidden
                  label="Edge agent default poll frequency"
                  tooltip="Interval used by default by each Edge agent to check in with the Portainer instance. Affects Edge environment management and Edge compute features."
                />

                <div className="form-group">
                  <div className="col-sm-12">
                    <LoadingButton
                      disabled={!isValid || !dirty}
                      dataCy="settings-edgeComputeButton"
                      className={styles.saveButton}
                      isLoading={isSubmitting}
                      loadingText="Saving settings..."
                    >
                      Save Settings
                    </LoadingButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </WidgetBody>
      </Widget>
    </div>
  );
}
