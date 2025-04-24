import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DemoawspipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    //AWS CI-CD
    const democicdpipeline = new CodePipeline(this,'demopipeline',
      {
            synth: new ShellStep('Synth', {
              // Use a connection created using the AWS console to authenticate to GitHub
              // Other sources are available.
              //input: CodePipelineSource.gitHub('mnowak02/democicd24042025', 'main'),
              input: CodePipelineSource.gitHub('mnowak02/democicd24042025', 'main'),
              commands: [
                'npm ci',
                'npm run build',
                'npx cdk synth',
              ],
            }),
          });



  }
}
