# Microsoft Graph Toolkit TeamsFx Provider

[![npm](https://img.shields.io/npm/v/@microsoft/mgt-teamsfx-provider?style=for-the-badge)](https://www.npmjs.com/package/@microsoft/mgt-teamsfx-provider)

The [Microsoft Graph Toolkit (mgt)](https://aka.ms/mgt) library is a collection of authentication providers and UI components powered by Microsoft Graph. 

The `@microsoft/mgt-teamsfx-provider` package exposes the `TeamsFxProvider` class which uses [TeamsFx](https://www.npmjs.com/package/@microsoft/teamsfx) to sign in users and acquire tokens to use with Microsoft Graph.

To learn more about authentication providers, see [Providers](./providers.md).

## Usage

1. Install the packages

    ```bash
    npm install @microsoft/mgt-element @microsoft/mgt-teamsfx-provider @microsoft/teamsfx
    ```

1. Initialize the provider inside your component.

    ```ts
    // Import the providers and credential at the top of the page
    import {Providers} from '@microsoft/mgt-element';
    import {TeamsFxProvider} from '@microsoft/mgt-teamsfx-provider';
    import {TeamsUserCredential} from "@microsoft/teamsfx";

    const scope = ["User.Read"];
    const teamsfx = new TeamsFx();
    const provider = new TeamsFxProvider(teamsfx, scope);
    Providers.globalProvider = provider;
    ```

1. Use the `teamsfx.login(scopes)` method to get the required access token.

    ```ts
    // Put these code in a call-to-action callback function to avoid browser blocking automatically showing up pop-ups. 
    await teamsfx.login(this.scope);
    Providers.globalProvider.setState(ProviderState.SignedIn);
    ```

    1. Now you can add any component in your HTML page or in your `render()` method when using React and it will use the TeamsFx context to access Microsoft Graph.

    ```html
    <!-- Using HTML -->
    <mgt-person query="me" view="threeLines"></mgt-person>
    ```

    ```ts
    // Using React
    public render(): void {
    return (
        <div>
            <Person personQuery="me" view={PersonViewType.threelines}></Person>
        </div>
    );
    }
    ```

For a sample that shows you how to initialize the TeamsFx provider, see the [Contacts Exporter sample](https://github.com/OfficeDev/TeamsFx-Samples/tree/dev/hello-world-tab-with-backend).

## See also
* [Microsoft Graph Toolkit docs](https://aka.ms/mgt-docs)
* [Microsoft Graph Toolkit repository](https://aka.ms/mgt)
* [Microsoft Graph Toolkit playground](https://mgt.dev)
* [TeamsFx docs](https://aka.ms/teamsfx-docs)
* [TeamsFx SDK document](https://docs.microsoft.com/en-us/microsoftteams/platform/toolkit/teamsfx-sdk)
